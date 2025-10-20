import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";

function Booking() {
  const [data, setData] = useState();
  const { id } = useParams();
  const heroData = useLoaderData();

  useEffect(() => {
    if (heroData && id) {
      const data = heroData.find((data) => data.id == id);
      setData(data);
    }
  }, [id, heroData]);

  return (
    <div className="grid grid-cols-12  my-20 ">
      <section className="left flex flex-col gap-2 col-span-6  justify-center">
        <h1 className="font-[Bebas_Neue] text-6xl text-white font-bold">
          {data?.name}
        </h1>
        <p className="text-primary-content">{data?.description}</p>
      </section>
      <section className="col-span-1"></section>
      <section className="right flex justify-between items-center col-span-5 p-3">
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form className="text-black">
              <fieldset className="fieldset">
                <label className="label text-black">Origin</label>
                <input
                  type="text"
                  className="input placeholder:text-black/40"
                  placeholder="your location"
                />
                <label className="label text-black">Destination</label>
                <input
                  type="text"
                  className="input placeholder:text-black/40"
                  placeholder="your destination"
                />
                <div className="flex gap-3">
                  <div className="flex-1/2">
                    <label className="label text-black">From</label>
                    <input
                      type="date"
                      className="input placeholder:text-black/40"
                      placeholder="your destination"
                    />
                  </div>
                  <div className="flex-1/2">
                    <label className="label text-black">To</label>
                    <input
                      type="date"
                      className="input placeholder:text-black/40"
                      placeholder="your destination"
                    />
                  </div>
                </div>
                <button className="btn btn-primary mt-4">Start Booking</button>
              </fieldset>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Booking;
