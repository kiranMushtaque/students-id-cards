// app/page.tsx
import Card from "./components/Card";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="flex flex-col items-center space-y-4">
        <Card Name="Kiran" RollNo={1234} day="Monday" ClassName="10" />
        <Card Name="Hassan" RollNo={1235} day="Tuesday" ClassName="11" />
        <Card Name="Mohsin" RollNo={1236} day="Wednesday" ClassName="12" />
      </div>
    </main>
  );
}
