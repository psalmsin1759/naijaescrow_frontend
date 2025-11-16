import { useMutation } from "@tanstack/react-query";
import { api } from "@/lib/axios";
import { ForgotPasswordRequestDto } from "../dtos/ForgotPasswordRequestDto";
import { ForgotPasswordResponseDto } from "../dtos/ForgotPasswordResponseDto";

export const useForgotPassword = () =>
  useMutation<ForgotPasswordResponseDto, Error, ForgotPasswordRequestDto>({
    mutationFn: async (payload: ForgotPasswordRequestDto) => {
      const { data } = await api.post<ForgotPasswordResponseDto>(
        "/auth/forgot-password",
        payload
      );
      return data;
    },
  });
