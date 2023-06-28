import React from 'react'

function HeaderMini({data}) {
  return (
    <div>
        {/* {data.map((ev)=>(
            <a href='/'>{data.name}</a>
        ))} */}
        <h2>menu</h2>
    </div>
  )
}

export default HeaderMini
export async function getServerSideProps() {
    const { top } = await import("./components/data/data.json");
    console.log(top)
    return {
      props: {
        data: top,
      },
    };
  }