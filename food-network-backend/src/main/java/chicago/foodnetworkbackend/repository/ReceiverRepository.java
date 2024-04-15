package chicago.foodnetworkbackend.repository;

import chicago.foodnetworkbackend.entity.Receiver;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReceiverRepository extends JpaRepository<Receiver,Long> {

    List<Receiver> findByStatusAndFoodTypeAndReceiverType(boolean status, String foodType, String receiverType);

    List<Receiver> findByStatusAndFoodType(boolean status, String foodType);

    List<Receiver> findByStatusAndReceiverType(boolean status, String receiverType);

    List<Receiver> findByStatus(boolean status);
}
