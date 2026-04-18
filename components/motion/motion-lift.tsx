"use client"

import { motion, useReducedMotion } from "motion/react"
import type { ReactNode } from "react"

type MotionLiftProps = {
  children: ReactNode
  className?: string
  amount?: "subtle" | "normal" | "strong"
}

const liftMap = {
  subtle: -2,
  normal: -4,
  strong: -8,
}

export function MotionLift({
  children,
  className,
  amount = "normal",
}: MotionLiftProps) {
  const reduce = useReducedMotion()
  const y = reduce ? 0 : liftMap[amount]
  return (
    <motion.div
      className={className}
      whileHover={{ y, scale: reduce ? 1 : 1.01 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    >
      {children}
    </motion.div>
  )
}
