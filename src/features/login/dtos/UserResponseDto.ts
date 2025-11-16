import { User } from "@/lib/types";

export interface UserResponseDto {
    user: User;
    token: string;
}