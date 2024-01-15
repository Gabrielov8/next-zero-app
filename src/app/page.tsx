import { Button } from "@/shared/ui/components/Button";
import classNames from "classnames";
import cs from "@theme/scss/theme.module.scss";
import React from "react";

export default function Home() {
	return (
		<section>
			<Button r22 className={classNames(cs.h5)} onClick={() => console.log(1)}>
				Выбрать 1
			</Button>
			<Button r22 className={classNames(cs.h5)} color="primaryOutlined">
				Выбрать 2
			</Button>
		</section>
	);
}
