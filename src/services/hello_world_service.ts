import logger from "../utils/logger";

export default function Service_Call_Hello_World(req:any,res:any) {
    logger.info("HelloWorldService added to server");
    console.log(req.request)
    res(null, req.request);
}

