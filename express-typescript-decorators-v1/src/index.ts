import { server } from "./server";
import { Request, Response } from "express";
import { METHOD, routeConfig, routeLog, routesAuth } from "./decorators";

class Routes {
  @routeConfig({
    method: METHOD.GET,
    path: "/hello",
  })
  public anyNameYouLike(req: Request, res: Response) {
    return "Hello World!";
  }

  @routeLog()
  @routesAuth("123")
  @routeConfig({
    method: METHOD.POST,
    path: "/post",
  })
  public async postExample(req: Request, res: Response) {
    let timeoutId;
    try {
      const result = new Promise(resolve => {
        timeoutId = setTimeout(() => {
          resolve("After 2 seconds");
        }, 2000);
      });

      return await result;
    } catch (error) {
      timeoutId && clearTimeout(timeoutId);
      return "Some error message";
    }
  }
}

server.start();
