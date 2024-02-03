import React from 'react'
import ResponsiveDrawer from './layout/sidebar'

const App = () => {
  return (
    <>
<ResponsiveDrawer />

<BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App