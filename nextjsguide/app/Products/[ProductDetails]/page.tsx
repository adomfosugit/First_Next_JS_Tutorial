export default async function Page({
  params
}: {
  params: Promise<{ ProductDetails: string }>
}) {
  const { ProductDetails } = await params

  return <h1>ProductDetails: {ProductDetails}</h1>

 
}