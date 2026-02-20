/*
FORM DATA STRUCTURE:

DROPDOWN
-expense category = ()


INPUT 
-expense (how much) = 







*/

import Layout from "../../layouts/Layout";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

function ExpenseForm({ onAddExpense }) {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");

  // const categories = [
  //   { name: "Grocery" },
  //   { name: "Everyday" },
  //   { name: "Personal" },
  //   { name: "Savings" },
  // ];
  // const [selected, setSelected] = useState(categories[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description || !amount) return;

    onAddExpense({
      description,
      amount: parseFloat(amount),
      // category: "General",
      // expense_date: new Date().toISOString().split("T")[0],
    });

    setDescription("");
    setAmount("");
  };

  return (
    <Layout>
      <div className="flex justify-between items-center">
        <p className="text-xl font-semibold text-center text-gray-100">
          Expenses
        </p>
        <Breadcrumbs />
      </div>

      <div className="min-h-screen mt-16 flex justify-center bg-background">
        <main className="w-full max-w-3xl p-6 space-y-10">
          <div>
            <p className="text-sm uppercase tracking-widest text-muted-foreground mb-5">
              Add Expense ( Actual )
            </p>
          </div>

          <Card className="w-full bg-background border border-border rounded-lg">
            <CardContent className="space-y-5">
              <div className="space-y-2">
                <Label
                  htmlFor="Category"
                  className="text-foreground font-medium"
                >
                  Category
                </Label>
                <Select>
                  <SelectTrigger className="w-full bg-secondary text-foreground">
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {/* <SelectLabel>Categories</SelectLabel> */}
                      {/* <div className="border-b border-3 border-slate-600 border-solid my-3" ></div> */}
                      <SelectItem value="grocery">Grocery</SelectItem>
                      <SelectItem value="everyday">Everyday</SelectItem>
                      <SelectItem value="personal">Personal</SelectItem>
                      <SelectItem value="savings">Savings</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="amount" className="text-foreground font-medium">
                  Amount
                </Label>
                <Input
                  id="amount"
                  type="text"
                  placeholder="0.00"
                  className="bg-secondary border-border text-foreground rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
            </CardContent>

            <CardFooter className="flex justify-end pt-4">
              <Button className="bg-accent text-accent-foreground rounded-md px-6 py-2 hover:bg-accent/70 transition-colors">
                Save Expense
              </Button>
            </CardFooter>
          </Card>
        </main>
      </div>
    </Layout>
  );
}

export default ExpenseForm;
