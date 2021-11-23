import { useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { setWayDown } from "../redux/features/transitionSlice";

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setWayDown());
  }, []);
  return (
    <div className={styles.container}>
      <Link href="/right">RIGHT</Link>
      <Link href="/">LEFT</Link>
      <Link href="/up">UP</Link>
      <Link href="/down">DOWN</Link>
    </div>
  );
}
