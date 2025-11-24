export interface ResetPasswordRequestDto {
  token: string;        
  password: string;   
  confirmPassword: string;
}
