import Image from "next/image";

const iconsLeft = [
  {
    id: "protect",
    image: "/images/icons/protect.png",
    text: "ป้องกันการกัดเซาะและ พังทลายของตลิ่ง",
  },
  {
    id: "thailand",
    image: "/images/icons/thailand.png",
    text: "รักษาแผ่นดินและอธิปไตย",
  },
  {
    id: "festival",
    image: "/images/icons/festival.png",
    text: "ประโยชน์ด้านสันทนาการจัดกิจกรรม ประเพณี ส่งเสริม การท่องเที่ยว",
  },
  {
    id: "park-isometric",
    image: "/images/icons/park-isometric.png",
    text: "พื้นที่พักผ่อน",
  },
];

const iconsRight = [
  {
    id: "environment",
    image: "/images/icons/environment.png",
    text: "ผลกระทบต่อระบบนิเวศ",
  },
  {
    id: "flow",
    image: "/images/icons/flow.png",
    text: "การไหลของน้ำไม่เป็นไป ตามธรรมชาติ",
  },
  {
    id: "house-isometric",
    image: "/images/icons/house-isometric.png",
    text: "วิถีชีวิตชุมชนริมโขง",
  },
  {
    id: "fisher-isometric",
    image: "/images/icons/fisher-isometric.png",
    text: "เกษตรริมโขง เลี้ยงปลาในกระชัง",
  },
  {
    id: "farm-isometric",
    image: "/images/icons/farm-isometric.png",
    text: "ความมั่นคงทางอาหาร ของชุมชนริมโขง",
  },
  {
    id: "view-isometric",
    image: "/images/icons/view-isometric.png",
    text: "ภูมิทัศน์พื้นถิ่น",
  },
];

const IconList = ({
  title,
  items,
}: {
  title: string;
  items: { id: string; image: string; text: string }[];
}) => (
  <div className="flex flex-col w-[50%]">
    <div className="text-[#FFEB52] font-extrabold text-4xl text-center">
      {title}
    </div>
    {items.map(({ id, image, text }) => (
      <div
        key={id}
        className="flex items-center gap-6 mt-6 text-xl font-semibold"
      >
        <Image
          src={image}
          alt={`${id} icon`}
          width={100}
          height={100}
          className="object-cover"
        />
        <p>{text}</p>
      </div>
    ))}
  </div>
);

export default function ThirtySixthSection() {
  return (
    <section className="h-[180vh] snap-start bg-[url('/images/page-41-background-dark.png')] bg-cover bg-center text-white flex flex-col items-center pt-28 pb-20">
      <div className="font-pridi text-5xl lg:text-7xl font-bold leading-relaxed">
        เขื่อนป้องกันตลิ่งแม่น้ำโขง
      </div>

      <div className="w-[75vw] bg-[#232323]/50 flex mt-14 font-ibm p-16 gap-12">
        <IconList title="สิ่งที่ได้มา" items={iconsLeft} />

        <div className="w-[1.5px] h-full bg-white"></div>

        <IconList title="สิ่งที่เสียไป" items={iconsRight} />
      </div>
    </section>
  );
}
