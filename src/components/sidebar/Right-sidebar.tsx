import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { ChevronRight } from 'lucide-react'
import styles from '@/styles/hover.module.css'

export const RightSidebar = () => {
  return (
    <div
      className={`w-64 fixed right-0 top-0 h-screen md:mt-4 rounded-[2px] bg-[#E6E7E9] p-4 pt-8 `}
    >
      <div className={styles.backgroundPattern}></div>
      <div className="flex flex-col items-center">
        <div className={`relative ${styles.avatarContainer}`}>
          <Avatar className="h-16 w-16">
            <AvatarImage
              src="/assets/images/AvatarHarr.png"
              alt="Harrison Philips"
            />
            <AvatarFallback>HP</AvatarFallback>
          </Avatar>
          <div
            className={`absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-xs text-white ${styles.notificationBadge}`}
          >
            5
          </div>
        </div>

        <h2 className="mt-4 text-[16px] font-medium">Harrison Philips</h2>
        <p className="text-[13px] text-gray-500">Business analyst</p>

        <div
          className={`mt-6 w-full cursor-pointer rounded-lg border border-gray-300 shadow-sm p-4 hover:bg-gray-50 ${styles.discountCard}`}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-[14px] ">Get - 10% sell price</p>
              <p className="text-[12px] text-gray-500">
                for "spanish A2" course
              </p>
            </div>
            <ChevronRight
              className={`h-5 w-5 text-blue-900 ${styles.chevronIcon}`}
            />
          </div>
        </div>

        <div className="mt-8 w-full">
          <h3 className={`mb-3 text-[17px] font-medium`}>Course Progress</h3>

          <div className="space-y-6">
            <div
              className={`flex items-center gap-2 p-4  cursor-pointer rounded-lg border border-gray-300 shadow-sm ${styles.courseCard} ${styles.indigo}`}
            >
              <div className="flex items-center justify-between">
                <span
                  className={`text-[#3d3fe2] font-medium ${styles.progressPercentage}`}
                >
                  63%
                </span>
              </div>
              <div className="rounded-lg bg-indigo-500 p-2">
                <img
                  src="/assets/images/create-outline.png"
                  alt="Grammar"
                  className="h-6 w-6  bject-cover"
                />
              </div>
              <div className="flex-1">
                <p className="font-medium">Grammar</p>
                <p className="text-[11px] text-gray-500">Learn new rules</p>
              </div>
            </div>

            <div
              className={`flex items-center gap-2 p-4  cursor-pointer rounded-lg border border-gray-300 shadow-sm ${styles.courseCard} ${styles.orange}`}
            >
              <div className="flex items-center justify-between">
                <span className=" text-[#FF8F00] font-medium">78%</span>
              </div>
              <div className="rounded-lg bg-[#FF8F00] p-2">
                <img
                  src="/assets/images/description.png"
                  alt="Dictionary"
                  className="h-6 w-6  bject-cover"
                />
              </div>
              <div className="flex-1">
                <p className="font-medium">Dictionary</p>
                <p className="text-[11px] text-gray-500">Learn 4 new words</p>
              </div>
            </div>

            <div
              className={`flex items-center gap-2 p-4  cursor-pointer rounded-lg border border-gray-300 shadow-sm ${styles.courseCard} ${styles.pink}`}
            >
              <div className="flex items-center justify-between">
                <span className="text-[#E83274] font-medium">34%</span>
              </div>

              <div className="rounded-lg bg-[#EA4C89] p-2">
                <img
                  src="/assets/images/ball.png"
                  alt="Reading"
                  className="h-6 w-6  bject-cover"
                />
              </div>
              <div className="flex-1">
                <p className="font-medium">Reading</p>
                <p className="text-[11px]  text-gray-500">Train your skill</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
