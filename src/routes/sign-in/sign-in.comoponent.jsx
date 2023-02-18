import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils";

const SignIn = () => {

    const signIn = async () => {
        signInWithGooglePopup()
        .then((response) => {
            console.log(response);
        });
    }

    return (
        <div onClick={signIn}>
            SIGN IN 
        </div>
    )
}

export default SignIn