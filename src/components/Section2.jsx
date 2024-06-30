import ProductTable from "./ProductTable";

function Section2() {
  return (
    <div className="section-2">
      <h3 className="main-heading ">
        <span>Step 4</span>: Calculating Pricing
      </h3>
      <div className="section-2-container flex ">
        <div className="flex flex-col section2-subsection buttons-side">
          <div className="left-side flex gap-4  ">
            <div className="flex flex-col   w-40">
              <label className=" inline w-30" htmlFor="">
                Per Hour Cost
              </label>
              <input
                type="text"
                name=""
                id=""
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="450 M"
              />
            </div>

            <div className="flex flex-col section-2-input  w-auto">
              <label htmlFor="">Per Hour Price</label>
              <input
                type="text"
                name=""
                id=""
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="450 M"
              />
            </div>

            <div className="flex flex-col section-2-input section-2-lastInput  w-auto">
              <label htmlFor="">Profit Margins</label>
              <input
                type="text"
                name=""
                id=""
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="450 M"
              />
            </div>
          </div>
          <div className="left-side flex gap-4  ">
            <div className="flex flex-col   w-40">
              <label className=" inline w-30 mb-2" htmlFor="">
                Per Hour Cost
              </label>
              <input
                type="text"
                name=""
                id=""
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="450 M"
              />
            </div>

            <div className="flex flex-col section-2-input  w-auto">
              <label htmlFor="" className="mb-2">
                Per Hour Price
              </label>
              <input
                type="text"
                name=""
                id=""
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="450 M"
              />
            </div>

            <div className="flex flex-col section-2-input section-2-lastInput  w-auto">
              <label htmlFor="" className="mb-2">
                Profit Margins
              </label>
              <input
                type="text"
                name=""
                id=""
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="450 M"
              />
            </div>
          </div>
          <div className="left-side flex gap-4  ">
            <div className="flex flex-col   w-40">
              <label className=" inline w-30 mb-2" htmlFor="">
                Per Hour Cost
              </label>
              <input
                type="text"
                name=""
                id=""
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="450 M"
              />
            </div>

            <div className="flex flex-col section-2-input  w-auto">
              <label htmlFor="" className="mb-2">
                Per Hour Price
              </label>
              <input
                type="text"
                name=""
                id=""
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="450 M"
              />
            </div>

            <div className="flex flex-col section-2-input section-2-lastInput  w-auto">
              <label htmlFor="" className="mb-2">
                Profit Margins
              </label>
              <input
                type="text"
                name=""
                id=""
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="450 M"
              />
            </div>
          </div>
        </div>
        <div className="right-side table-side">
          <div className=" overflow-auto">
            <ProductTable />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section2;
