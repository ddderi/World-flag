import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: "us-west-2_U9EnA8zff",
    ClientId: "36jsc3nbg2jfv9stpn91gb9ks0"
}

export default new CognitoUserPool(poolData);