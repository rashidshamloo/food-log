import { type Entry } from "@prisma/client";

import { db } from "@/lib/db";

const History = async () => {
  let entry: Entry;
  // try{ entry = await db.entry.findFirst({where:{id:{equals:id}}})
  // }catch(e){console.log(e)}
  return <div>History</div>;
};

export default History;
