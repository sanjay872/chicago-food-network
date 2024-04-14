package chicago.foodnetworkbackend.repository;

import chicago.foodnetworkbackend.entity.Receiver;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReceiverRepository extends JpaRepository<Receiver,Long> {
}
