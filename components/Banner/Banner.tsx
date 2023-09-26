import Icons from "@/assets/svgIcons"
import Button from "../Button/Button"
import Typography from "../Typography/Typography"

const Banner = () => {
  return (
    <div className="bg-black rounded-2xl sm:rounded-3xl flex items-start text-white py-2 h-[250px] ">

      {Icons.curveArrow()}
      <div className="flex justify-between flex-wrap items-end   sm:items-center w-full h-full px-1 sm:px-5 ">

      <Typography className="mt-8 sm:mt-0" fontSize="text-xl sm:text-2xl" fontWeight="font-medium sm:font-bold" >
      لديك مشروع؟
      </Typography>
      <div className="flex justify-center sm:justify-end pb-5 sm:pb-0 items-center gap-x-5 -mr-10 sm:mr-0">
      <Button secondary>
      دعنا نتحدث
        </Button>
        <Typography >جدوِل مكالمة</Typography>
      </div>
      </div>
    </div>
  )
}

export default Banner