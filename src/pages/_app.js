import '@/styles/globals.css'
import {Provider} from "react-redux"
import {store} from "@/store/store"

import styles from '@/styles/Main.module.css'

export default function App({ Component, pageProps }) {
  return (
      <Provider store={store}>
          <div className={styles.main}>
              <Component {...pageProps} />
          </div>
      </Provider>
  )
}
