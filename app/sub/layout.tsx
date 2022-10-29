
export default function SubLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      <div>sub layout</div>
      <div>{children}</div>
    </section>
  )
}