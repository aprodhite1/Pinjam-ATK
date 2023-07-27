export default function postDetail({ params }: { params: { Id: string } }) {
  return <div>List {params.Id}</div>;
}
