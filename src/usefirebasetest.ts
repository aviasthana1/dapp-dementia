import { db } from "@/src/services/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useEffect } from "react";

export function useFirebaseTest() {
  useEffect(() => {
    const testRead = async () => {
      try {
        const ref = doc(db, "test", "VDJOBGzviZaHyaLfeCiu");
        const snap = await getDoc(ref);

        if (snap.exists()) {
          console.log("✅ Firestore data:", snap.data());
        } else {
          console.log("❌ No document found");
        }
      } catch (err) {
        console.error("🔥 Firestore error:", err);
      }
    };

    testRead();
  }, []);
}
