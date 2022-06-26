import { Header, Sidebar, Video } from "../../components"

const Event = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="flex flex-1">
        <Video />
        <Sidebar />
      </main>
    </div>
  )
}

export default Event