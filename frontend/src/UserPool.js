import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
    UserPoolId: "us-west-2_raW5tSzwE",
    ClientId: "18uphqh3ksjmn1rrkec2g8ujb7"
}

export default new CognitoUserPool(poolData);