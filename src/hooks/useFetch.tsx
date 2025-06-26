import { onValue, ref } from "firebase/database";
import { useEffect, useState } from "react";

import { TradingListType } from "@koinbx/types/TradingListType";
import { database } from "@koinbx/lib/firebase";

export default function useFetch(): TradingListType[] {
  const [data, setData] = useState<TradingListType[] | null>(null);

  useEffect(() => {
    const dataRef = ref(database, "trades");
    console.log("Fetching from:", dataRef);

    const unsubscribe = onValue(dataRef, (snapshot) => {
      const value = snapshot.val();

      if (value) {
        const formatted: TradingListType[] = Object.values(value);
        setData(formatted);
        console.log("✅ Received trade data:", formatted);
      } else {
        console.warn("⚠️ No data found at /trades");
        setData([]);
      }
    });

    return () => unsubscribe();
  }, []);

  return data || [];
}
