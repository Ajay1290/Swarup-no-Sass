import React from "react"

import Layout from '../components/layout.js';

const Index = () => {
  return (
    <Layout>
      <div className="sw-container pt-5">
          <div>
              <h1 className="f-64 w-75 b-1 sans-serif mb-0">Build theme-based, responsive sites <br/> with Swarup</h1>
              <p className="f-28 w-50">
                  Quickly design and customize responsive theme-based sites with Swarup,
                  the front-end framework featuring bunch of prebuild components.
              </p>
              <button className="sw-btn p-3 px-4 f-20">Get Started</button>
              <button className="sw-btn sw-btn-outline p-3 ml-2 px-4 f-20">Download</button>
              <div className="mt-2">Currently v1.0</div>
          </div>
      </div>
    </Layout>
  )
}

export default Index;