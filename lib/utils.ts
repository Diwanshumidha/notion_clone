import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function getRandomImage(imageArray:string[]) {
  if (imageArray.length === 0) {
    return null;
  }

  const randomIndex = Math.floor(Math.random() * imageArray.length);
  return imageArray[randomIndex];
}

export function getInitials(name:string) {
  
  const words = name.split(' ');


  let initials = '';

  
  for (const word of words) {
    if (word.length > 0) {
      initials += word[0].toUpperCase();
    }
  }

  return initials;
}