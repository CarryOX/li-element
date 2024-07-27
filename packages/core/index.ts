import { makeInstaller } from "@li-element/utils";
import components from "./components";
import '@li-element/theme/index.css'

const installer = makeInstaller(components)
export * from '@li-element/components'
export default installer
