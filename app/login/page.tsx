import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
const page = () => {
  return (
    <>
      <div className="flex h-dvh w-full justify-center items-center">
        <Tabs defaultValue="account" className="w-[400px]">
          <TabsList>
            <TabsTrigger value="account">LogIn</TabsTrigger>
            <TabsTrigger value="password">signIn</TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl font-semibold text-center uppercase">
                  Login
                </CardTitle>
                <CardDescription></CardDescription>
              </CardHeader>
              <CardContent>
                <form>
                  <div className="flex items-center justify-center gap-4 flex-col">
                    <Input placeholder="Enter Your Email" />
                    <Input placeholder="Enter Your Password" />
                  </div>
                  <div className="mt-3">
                    <Button className="w-full">Login</Button>
                  </div>
                  
                </form>
                <div className="mt-2 text-center mb-2 font-medium">OR</div>
                <form>
                    <div className="mt-3 flex ">
                      <Button variant={"outline"} className="w-full bg-blue- font-medium text-md hover:bg-blue-500 transition-all duration-500"><FcGoogle /> Login With Google</Button>
                    </div>
                  </form>
              </CardContent>
              <CardFooter className="flex items-center justify-end text-xs font-medium text-blue-500">
                <Link className="" href="/signup">
                  Developed By Inam
                </Link>
              </CardFooter>
            </Card>
          </TabsContent>
          <TabsContent value="password">
          <Card>
              <CardHeader>
                <CardTitle className="text-3xl font-semibold text-center uppercase">
              Sign Up
                </CardTitle>
                <CardDescription></CardDescription>
              </CardHeader>
              <CardContent>
                <form>
                  <div className="flex items-center justify-center gap-4 flex-col">
                    <Input placeholder="Enter Your Name" />
                    <Input placeholder="Enter Your Email" />
                    <Input placeholder="Enter Your Password" />
                  </div>
                  <div className="mt-3">
                    <Button className="w-full">Sign Up</Button>
                  </div>
                  
                </form>
                <div className="mt-2 text-center mb-2 font-medium">OR</div>
                <form>
                    <div className="mt-3 flex ">
                      <Button variant={"outline"} className="w-full bg-blue- font-medium text-md hover:bg-blue-500 transition-all duration-500"><FcGoogle /> Login With Google</Button>
                    </div>
                  </form>
              </CardContent>
              <CardFooter className="flex items-center justify-end text-xs font-medium text-blue-500">
                <Link className="" href="/signup">
                  Developed By Inam
                </Link>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default page;
