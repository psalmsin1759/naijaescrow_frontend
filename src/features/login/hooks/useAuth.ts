import { useAuthContext } from "@/contexts/AuthContext";
import { api } from "@/lib/axios";
import { useMutation } from "@tanstack/react-query";
import { LoginRequestDto } from "../dtos/LoginRequestDto";
import { UserResponseDto } from "../dtos/UserResponseDto";

export const useAuth = () => {
  const auth = useAuthContext();

  const mutation = useMutation<UserResponseDto, Error, LoginRequestDto>({
    mutationFn: async (payload: LoginRequestDto): Promise<UserResponseDto> => {
      const { data } = await api.post("/auth/login", payload);
      return data;
    },
  });

  const login = async (payload: LoginRequestDto) => {
    const res = await mutation.mutateAsync(payload);
    auth.login(res.user, res.token);
    return res;
  };

  const logout = () => {
    auth.logout();
    api.post("/auth/logout").catch(() => {});
  };

  return { ...mutation, login, logout };
};
