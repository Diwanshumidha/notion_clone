export const Images = [
    'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z3JhZGllbnR8ZW58MHx8MHx8fDA%3D',
    'https://images.unsplash.com/photo-1579548122080-c35fd6820ecb?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGdyYWRpZW50fGVufDB8fDB8fHww',
    'https://images.unsplash.com/photo-1579547944064-0180251f94c8?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE0fHxncmFkaWVudHxlbnwwfHwwfHx8MA%3D%3D',
    "https://images.unsplash.com/photo-1579547621113-e4bb2a19bdd6?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTE2fHxncmFkaWVudHxlbnwwfHwwfHx8MA%3D%3D",
    'https://images.unsplash.com/photo-1614852207179-f21528f68aa0?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTI2fHxncmFkaWVudHxlbnwwfHwwfHx8MA%3D%3D',
    'https://images.unsplash.com/photo-1523396206913-a003efa7861b?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTU2fHxncmFkaWVudHxlbnwwfHwwfHx8MA%3D%3D',
    'https://images.unsplash.com/photo-1614851099507-f1a93001d984?auto=format&fit=crop&q=60&w=600&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTkyfHxncmFkaWVudHxlbnwwfHwwfHx8MA%3D%3D'
]
type Route = {
    title: string;
    path: string;
  };
  export const routes: Route[] = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Dashboard",
      path: "/editor",
    },
  ];