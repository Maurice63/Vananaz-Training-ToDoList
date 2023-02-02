import { message } from "antd";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import firebase from "../../../firebase/firebaseConfig";
import { putUser, removeUser, userProps } from "../../../redux/features/User";
import { AuthHooks } from "../index";

export const useAuthAction: AuthHooks["useAuthAction"] = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const loginWithEmail = useCallback(
    async (email: string, password: string) => {
      await firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((results) => {
          if (results !== null) {
            const currentUser: userProps = { uid: results.user?.uid || "" };
            dispatch(putUser(currentUser));
            history.push("/home");
          }
        })
        .catch((error) => {
          message.error("Unable to sign in. please try again later.");
        });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  const logout = useCallback(async () => {
    await firebase
      .auth()
      .signOut()
      .then((result) => {
        dispatch(removeUser(""));
        history.push("/login");
      })
      .catch((error) => {
        message.error("Unable to sign out. please try again later.");
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return { loginWithEmail, logout };
};
