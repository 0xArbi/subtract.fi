import Head from "next/head";

export default function Home() {
  return (
    <div className="max-w-lg mx-auto py-12 space-y-4">
      <Head>
        <title>Subtract</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="italic">
        <span className="font-medium not-italic">subtract</span>, take away (a
        number or amount) from another to calculate the difference.
      </div>

      <div>
        We&apos;re a developer collective contributing to all manner of
        interesting web3 projects, regardless of their position in the stack.
        Our ethos is aggressive minimalism in the face of exploding complexity.
        Ping{" "}
        <a
          href="mailto:work@subtract.fi"
          className="text-blue-600 hover:underline"
        >
          work@subtract.fi
        </a>{" "}
        to get in touch.
      </div>

      <div className="">
        <div className="text-lg">Interests</div>

        <ul className="list-disc pl-8">
          <li>App chains and L2s</li>
          <li>CosmWasm, Solidity, Rust</li>
          <li>Bridges</li>
          <li>{"MEV & block building"}</li>
        </ul>
      </div>

      <div className="">
        <div className="text-lg">Projects</div>

        <div className="ml-6 pt-1">
          {[
            {
              link: "https://proposals.subtract.fi/",
              title: "Interchain Governance",
              description:
                "Permissionless dashboard for submitting and viewing governance interchain governance proposals",
            },
            {
              link: "https://explorer.subtract.fi/",
              title: "Interchain Contract Explorer",
              description:
                "Frontend for reading and writing to any verified CosmWasm contract",
            },
            {
              link: "https://cw-fractionalize-frontend.vercel.app/",
              title: "cw-fractionalize",
              description: "Permissionless CosmWasm NFT fractionalization",
            },
            {
              link: "https://cosmos-multi-send.vercel.app/",
              title: "cosmos multi-send",
              description:
                "Utility tool for bulk disbursements of native and CW20 tokens",
            },
          ].map(({ link, title, description }) => (
            <div key={link} className="mb-2">
              <a
                href={link}
                target="_blank"
                className="items-center"
                rel="noreferrer"
              >
                <span className="">{title}</span>
              </a>
              {description && (
                <div className="text-xs text-gray-600">{description}</div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="">
        <div className="text-lg">Contributions</div>

        <div className="ml-6 pt-1 space-y-2">
          {[
            {
              link: "https://github.com/public-awesome/launchpad/pulls/0xArbi/",
              title: "Stargaze",
              image:
                "https://pbs.twimg.com/profile_images/1507391623914737669/U3fR7nxh_400x400.jpg",
            },
            {
              link: "https://github.com/DA0-DA0/dao-contracts/pulls/0xArbi/",
              title: "DAO_DAO",
              image:
                "https://pbs.twimg.com/profile_images/1487643355353796610/OAvKjhNZ_400x400.jpg",
            },
          ].map(({ link, title, image }) => (
            <a
              key={link}
              href={link}
              target="_blank"
              className="flex items-center space-x-2"
              rel="noreferrer"
            >
              {image && <img src={image} className="rounded-full h-5 w-5" />}
              <span className="">{title}</span>
            </a>
          ))}
        </div>
      </div>

      <div className="space-y-1">
        <div className="text-lg">Members</div>

        <div className="pl-6 pt-1">
          <a
            href="https://twitter.com/0xArb"
            target="_blank"
            className="flex items-center space-x-2"
            rel="noreferrer"
          >
            <img
              src="https://pbs.twimg.com/profile_images/1575496896390447104/JtPOS6U3_400x400.jpg"
              className="rounded-full h-5 w-5"
            />
            <span>0xArb</span>
          </a>
        </div>
      </div>
    </div>
  );
}
