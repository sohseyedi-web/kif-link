import Image from "next/image";

const LinkItemBox = ({ item }) => {
  return (
    <div
      key={item.id}
      className="lg:w-[22%] w-[48%] rounded-3xl flex-col shadow border p-2 flex items-center justify-center space-y-2"
    >
      <Image
        src={`/icon/${item.icon}.png`}
        alt={item.name}
        width={48}
        height={48}
        className="object-contain"
      />
      <h4 className="text-lg font-semibold">{item.name}</h4>
      <input dir="ltr" type="text" className="py-1 rounded-2xl pl-3 w-[90%] mx-auto shadow outline-none border bg-gray-50"/>
    </div>
  );
};

export default LinkItemBox;
