import TopBar from "../components/dashboard/TopBar"


const dashboardLayout = ({ children } : {children: React.ReactNode}) => {
  return (
    <div className="bg-lightGrey h-screen md:p-6">
      <TopBar />
      {children}
      </div>
  )
}

export default dashboardLayout