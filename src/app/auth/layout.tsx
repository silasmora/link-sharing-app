

const Authlayout = ({ children }: {children: React.ReactNode}) => {
  return (
    <div className="p-8 md:p-0 md:bg-lightGrey md:flex flex-col items-center justify-center md:h-screen">
      {children}
    </div>
  )
}

export default Authlayout