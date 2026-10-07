//props এ টাইপ দেওয়ার নিয়ম
//type XProps = { নাম: টাইপ; ঐচ্ছিক?: টাইপ }
//function X({ নাম, ঐচ্ছিক = ডিফল্ট }: XProps) { ... }

import type { ReactNode } from "react";

type ContainerProps = {
    children: ReactNode
    width?: 'wide' | 'reading'
}

const WIDTH_CLASSES = {
  wide: 'max-w-7xl',
  reading: 'max-w-2xl',
}

function Container ({children, width = 'wide'}: ContainerProps) {
     return (
    <div className={`mx-auto w-full px-4 sm:px-6 ${WIDTH_CLASSES[width]}`}>
      {children}
    </div>
  )
}

export default Container