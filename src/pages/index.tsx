import { Layout } from "@/components/Layout";
import TodoList from "@/components/TodoList";


export default function Home() {
  return (
    <Layout title="Home">
      <main>
        <TodoList />
      </main>
    </Layout>
  );
}
