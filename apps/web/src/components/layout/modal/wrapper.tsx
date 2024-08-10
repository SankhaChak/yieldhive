import { Dialog } from "@yieldhive/ui/components/ui/dialog";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  open: boolean;
  onOpenChange: (open: boolean) => void;
}>;

const ModalWrapper = ({ open, onOpenChange, children }: Props) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange} modal>
      {children}
    </Dialog>
  );
};

export default ModalWrapper;
