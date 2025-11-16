import { useMutation } from "@tanstack/react-query";
import { api } from "@/lib/axios";
import { ResetPasswordRequestDto } from "../dtos/ResetPasswordRequestDto";
import { ResetPasswordResponseDto } from "../dtos/ResetPasswordResponseDto";

export const useResetPassword = () =>
  useMutation<ResetPasswordResponseDto, Error, ResetPasswordRequestDto>({
    mutationFn: async (payload: ResetPasswordRequestDto) => {
      const { data } = await api.post<ResetPasswordResponseDto>(
        "/auth/reset-password",
        payload
      );
      return data;
    },
  });
