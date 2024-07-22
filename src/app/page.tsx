'use client'

import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useForm } from "react-hook-form"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useToast } from "@/components/ui/use-toast"


export default function Login() {
  const { register, handleSubmit } = useForm()
  const router = useRouter()
  const { toast } = useToast()

  const onSubmit = async (data: any) => {


    const signInData = await signIn('credentials', {
      email: data.email,
      password: data.password,
      redirect: false
    })

    if(signInData?.error) {
      toast({
        variant: "destructive",
        duration: 3000,
        title: "Erro de Login",
        description: "Email ou senha incorreto",
      })
     } else {
      toast({
        variant: "default",
        duration: 3000,
        title: "Sucesso",
        description: "Efetuando login",
      })
      router.refresh()
      router.push('/map')
     }
  }

  return (
    <div className="w-full h-screen lg:grid lg:min-h-[600px] lg:grid-cols-2 xl:min-h-[800px]">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Login</h1>
            <p className="text-balance text-muted-foreground">
              Seja bem vindo ao GeoMap Instituto Homem Pantaneiro 🌳.

              Faça Login para continuar
            </p>
          </div>
          <div className="grid gap-4">
           <form  onSubmit={handleSubmit(onSubmit)}>
           <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                placeholder="joao@example.com"
                required
                {...register("email")}
              />
            </div>
            <div className="grid gap-2 my-5">
              <div className="flex items-center">
                <Label htmlFor="password">Senha</Label>
                <Link
                  href="/forgot-password"
                  className="ml-auto inline-block text-sm underline"
                >
                  Esqueceu sua senha?
                </Link>
              </div>
                <Input id="password" type="password" required {...register("password")}/>
            </div>
            <Button type="submit" className="w-full">
              Entrar
            </Button>
           </form>
          </div>
        </div>
      </div>
      <div className="hidden bg-muted lg:block">
        <Image
          src="/arara-background.jpg"
          alt="Image"
          width="1920"
          height="1080"
          className="h-full w-full object-cover dark:brightness-[0.8] "
        />
      </div>
    </div>
  )
}
