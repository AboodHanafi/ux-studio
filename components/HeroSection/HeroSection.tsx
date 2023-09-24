import Button from "../Button/Button"
import Typography from "../Typography/Typography"

const HeroSection = () => {
  return (
    <div className="bg-black rounded-2xl sm:rounded-3xl flex flex-col justify-center items-center text-white  gap-y-4 sm:gap-y-10 py-40">
      <Typography fontSize="text-lg sm:text-2xl" fontWeight="font-semibold" >
      نُنتج للمستقبل
      </Typography>
      <Typography fontSize="text-xs sm:text-sm" fontWeight="font-normal" >
      نرسم أفكارك، ونصنع تجارب مستخدم استثنائية
      </Typography>
      <div className="flex justify-center items-center gap-x-3">
      <Button secondary>
        ابدأ مشروعك
        </Button>
        <Button>اطلب استشارة مجانية</Button>
      </div>
    </div>
  )
}

export default HeroSection