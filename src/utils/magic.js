// import {Magic} from "magic-sdk"

// const magic =new Magic(import.meta.VITE_PUBLISHABLE_API_KEY)
// const createMagic = (key)=>{
//     return typeof window !== "undefined" && new Magic(key)
// }

// // export const magic = createMagic(import.meta.VITE_PUBLISHABLE_API_KEY);

import { Magic } from "magic-sdk";

// export const magic = new Magic(import.meta.env.VITE_PUBLISHABLE_API_KEY, {
// 	deferPreload: true,
// });

// // ...

// magic.preload;

const createMagic = (key) => {
	// We make sure that the window object is available
	// Then we create a new instance of Magic using a publishable key
	return typeof window !== "undefined" && new Magic(key);
};

// Pass in your publishable key from your .env file
export const magic = createMagic("pk_live_B6D80BE438E4F1B6");