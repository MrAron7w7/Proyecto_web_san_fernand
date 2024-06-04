import IndexHeader from './home/pages/appbar/IndexHeader'
import IndexBody from './home/pages/body/IndexBody'
import Footer from './home/pages/footer/Footer'

function App() {
  return (
    <>
      <main className="px-4 pt-6">
        <IndexHeader />
        <IndexBody />
      </main>
      <Footer />
    </>
  )
}

export default App
