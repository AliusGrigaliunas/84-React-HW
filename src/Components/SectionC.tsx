import React from 'react'

type SectionCProps = {
    children?: React.ReactNode
}

function SectionC({children}: SectionCProps): React.ReactElement {
  return (
    <section id="section-c">
      {children}
  </section>
  )
}

export default SectionC