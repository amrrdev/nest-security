export interface ActiveUserData {
  /**
   * The 'userId' of the token. the value of this properity is the user id
   * that generated this token
   */
  userId: number;

  /**
   * the user's email
   */
  email: string;
}
