import { LinkItemArray } from "@/constant/LinkItemArray";
import LinkItemBox from "./LinkItemBox";

const AddLinkBox = () => {
  return (
    <div className="flex items-center justify-between flex-wrap gap-y-3">
      {LinkItemArray.map((item) => (
        <LinkItemBox key={item.id} item={item} />
      ))}
    </div>
  );
};

export default AddLinkBox;
